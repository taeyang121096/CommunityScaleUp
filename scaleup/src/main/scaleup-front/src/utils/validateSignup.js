//회원가입 유효성 검사

//이메일 형식이면 true
export const validateEmail = Email => {
    const regex = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/;
    return regex.test(Email);
}

//4자리면 true
export const validateId = Id => {
    const regex = /^.{4,}$/;
    return regex.test(Id);
}

//숫자 적어도 하나, 영문 대소문자 중 적어도 하나, 8~16자리면 true
export const validatePw = text => {
    const regex =/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    return regex.test(text);
}

//공백 있으면 true
export const validateWhitespace = text => {
    const regex = /\s/g;
    return regex.test(text);
}

export const validateName = Name => {
    const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;
    return regex.test(Name);
}
