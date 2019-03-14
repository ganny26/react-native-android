package com.letsventure.reactnativeapp;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;

public class MainActivity extends AppCompatActivity implements View.OnClickListener,ReactApplication {

    private static final int OVERLAY_PERMISSION_REQ_CODE = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);
        Button landingButton = (Button) findViewById(R.id.landing_button);
        Button eventsButton = (Button) findViewById(R.id.events_button);

        landingButton.setOnClickListener(this);
        eventsButton.setOnClickListener(this);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(this)) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                        Uri.parse("package:" + getPackageName()));
                startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
            }
        }

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (!Settings.canDrawOverlays(this)) {
                    // SYSTEM_ALERT_WINDOW permission not granted...
                }
            }
        }
    }

    @Override
    public void onClick(View v) {

        switch (v.getId()){
            case R.id.landing_button:
                Intent intent= new Intent(getApplicationContext(), LandingActivity.class);
                startActivity(intent);
                break;
            case R.id.events_button:
                Intent mainIntent= new Intent(getApplicationContext(), EventsActivity.class);
                startActivity(mainIntent);
                break;
        }
    }

    @Override
    public ReactNativeHost getReactNativeHost() {
        return null;
    }
}
