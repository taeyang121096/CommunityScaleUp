//게시판 글쓰기 유효성 검사

export const validateEmpty= text => {
    const regex = /.{1,}/;
    return regex.test(text);
}