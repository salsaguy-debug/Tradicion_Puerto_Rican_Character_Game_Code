'use strict';
{
    window.RuntimeInterface = class RuntimeInterface {
        constructor(opts) {
            this._exportType = opts.exportType;
            this._useWorker = opts.useWorker;
            this._scriptFolder = opts.scriptFolder;
            this._runtimeBaseUrl = opts.runtimeBaseUrl || "";

            // Force Web Mode to bypass mobile checks
            if (this._exportType === "cordova") {
                this._exportType = "html5";
            }

            console.log("Bypass Active: Starting Game...");
            this._Init(opts);
        }

        async _Init(opts) {
            const canvas = document.createElement("canvas");
            canvas.id = "c3canvas";
            document.body.appendChild(canvas);
            console.log("Canvas created. Engine ready.");
        }
    }; 
}