class ConfigModel {
    constructor () {
        this._config = {}
        this._initializedLauch = false
    }

    get initializedLaunch () {
        return this._initializedLauch
    }

    set initializedLaunch (value) {
        this._initializedLauch = value
    }

    get config () {
        return this._config
    }

    set config ({
        startserver,
        launchroute,
        profileroute,
        startparams,
        loginroute
    }) {
        if (startserver) this.config.startserver = startserver
        if (loginroute) this.config.loginroute = loginroute 
        if (launchroute) this.config.launchroute = launchroute         
        if (profileroute) this.config.profileroute = profileroute
        if (startparams) this.config.startparams = startparams
    }

    loginUrl () {
        return this._config.startserver + this._config.loginroute
    }

    launchUrl () {
        return this._config.startserver + this._config.launchroute + this._config.startparams   
    }

    profileUrl () {
        return this._config.startserver + this._config.profileroute
    }
}

export default new ConfigModel()
