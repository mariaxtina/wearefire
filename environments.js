var _Environments = {
    TWILIO_ACCOUNT_SID: 'AC8761c139bdfb55c8d8aadbc677e5f334',
    TWILIO_AUTH_TOKEN: '87ed4ab0115e164cd98468c27047d4c8',
    TWILIO_NUMBER: '+12262714569'
}

function getEnvironment() {
    return _Environments;
}

var Environment = getEnvironment();
module.exports = Environment;