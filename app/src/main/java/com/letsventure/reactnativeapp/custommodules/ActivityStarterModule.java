package com.letsventure.reactnativeapp.custommodules;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.letsventure.reactnativeapp.MainActivity;

import javax.annotation.Nonnull;

public class ActivityStarterModule extends ReactContextBaseJavaModule {
    public ActivityStarterModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }



    @ReactMethod
    void navigateToExample() {
        ReactApplicationContext context = getReactApplicationContext();
        Intent intent = new Intent(context, MainActivity.class);
        context.startActivity(intent);
    }

    @Override
    public String getName() {
        return "ActivityStarter";
    }
}
