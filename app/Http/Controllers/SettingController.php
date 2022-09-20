<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileImageRequest;
use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function account()
    {
        return Inertia::render('setting/Account');
    }

    public function general(UserRequest $request)
    {

        $request->user()->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        if ($request->password) {
            $request->user()->update([
                'password' => Hash::make($request->password),
            ]);
        }

        return redirect()->back()->with('success', 'User profile updated succeffully');
    }

    public function profile_image(ProfileImageRequest $request)
    {
        $originalFileName = $request->image->getClientOriginalName();
        $filename = pathinfo($originalFileName, PATHINFO_FILENAME);
        $extension = pathinfo($originalFileName, PATHINFO_EXTENSION);
        $fileName = $filename . "-" . time() . "." . $extension;
        $request->image->storeAs('images', $fileName, "public");

        if ($request->user()->image) {
            $path = str_replace('/storage', '/public', $request->user()->image);
            Storage::delete($path);
        }
        $request->user()->update([
            'image' => '/storage/images/' . $fileName
        ]);

        return redirect()->back()->with('success', 'Profile image updated succeffully');
    }
}
