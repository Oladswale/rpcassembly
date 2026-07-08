<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TestimonyController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'      => 'required|string|max:255',
            'phone'     => 'nullable|string|max:20',
            'testimony' => 'required|string|max:5000',
        ]);

        $googleFormUrl = config('services.google_forms.testimony_url');

        if (!$googleFormUrl) {
            return response()->json([
                'success' => false,
                'message' => 'Testimony submission is not configured.',
            ], 500);
        }

        try {
            $response = Http::asForm()
                ->timeout(15)
                ->withoutVerifying()
                ->post($googleFormUrl, [
                    'entry.1936470743' => $validated['name'],
                    'entry.1734192768' => $validated['phone'] ?? '',
                    'entry.1236092885' => $validated['testimony'],
                ]);

            if ($response->successful()) {
                return response()->json([
                    'success' => true,
                    'message' => 'Thank you for sharing your testimony! God bless you.',
                ]);
            }

            logger()->warning('Google Form returned unexpected status', [
                'status' => $response->status(),
                'body'   => $response->body(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Unable to submit testimony. Please try again later.',
            ], 502);
        } catch (\Exception $e) {
            logger()->error('Google Form submission failed', [
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'A network error occurred. Please try again.',
            ], 502);
        }
    }
}
