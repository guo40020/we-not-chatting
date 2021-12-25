from fastapi.responses import JSONResponse
from backend import app
from backend.models.send_verification_model import SendVerificationModel
from backend.apis import MISSING_ARGS_RESPONSE
from backend.services.verifiaction_code import send_verification_code


@app.post("/api/v1/send_verification")
def send_verification(data: SendVerificationModel):
    if data.phone is None:
        return JSONResponse(MISSING_ARGS_RESPONSE, status_code=400)

    code = send_verification_code(data.phone)
    print(f"verification code: {code}")
    return JSONResponse({
            "code": 0,
            "msg": None,
    })
