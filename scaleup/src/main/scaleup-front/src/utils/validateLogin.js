//로그인 유효성 검사

//4자리 이상이면 true
export const validateId = Id => {
    const regex = /^.{4,}$/;
    return regex.test(Id);
}

//8~16자리면 true
export const validatePw = Pw => {
    const regex = /^.{8,16}$/;
    return regex.test(Pw);
}

//공백 있으면 true
export const validateWhitespace = text => {
    const regex = /\s/g;
    return regex.test(text);
}
