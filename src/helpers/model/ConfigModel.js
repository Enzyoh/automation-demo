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
    username,
    password,
    loginroute
  }) {
    if (startserver) this.config.startserver = startserver
    if (loginroute) this.config.loginroute = loginroute
    if (launchroute) this.config.launchroute = launchroute
    if (profileroute) this.config.profileroute = profileroute
    if (username) this.config.username = username
    if (password) this.config.password = password
  }

  loginUrl () {
    return this._config.startserver
  }

  launchUrl () {
    return this._config.startserver
  }

  profileUrl () {
    return this._config.startserver
  }
}

export default new ConfigModel()
