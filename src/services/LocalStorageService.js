
// reference doc = https://medium.com/swlh/handling-access-and-refresh-tokens-using-axios-interceptors-3970b601a5da


const LocalStorageService = (function(){ 
    var _service; 

    function _getService() {
        if(!_service) {
            _service = this;
            return _service
        }
        return _service;
    }

    function _setToken(tokenData) {
        localStorage.setItem('tokenData', tokenData);
        // localStorage.setItem('refresh_token', tokenObj.refresh_token);
    } 

    function _getAccessToken() {
        return localStorage.getItem('tokenData');
    } 

    function _getRefreshToken() {
        return localStorage.getItem('refresh_token');
    } 

    function _clearToken() {
        localStorage.removeItem('tokenData');
        localStorage.removeItem('refresh_token');
    }

    return {
        getService : _getService,
        setToken : _setToken,
        getAccessToken : _getAccessToken,
        getRefreshToken : _getRefreshToken,
        clearToken : _clearToken
    }}
)();

export default LocalStorageService;