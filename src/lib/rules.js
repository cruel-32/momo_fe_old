export const match = {
    'email' : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    'username': /^[A-Za-z0-9가-힣\-_$]{2,12}$/,
    'password': /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/,
    'name':/^[가-힣]{2,10}$/,
}

export const message = {
    'required' : "필수입력항목 입니다",
    'email' : '이메일 제대로 써라 좀',
    'username': '닉넴 제대로 써라 좀',
    'password': '비번 제대로 써라 좀',
    'name':'이름 제대로 써라 좀',
    'passwordConfirm' : '비밀번호가 서로 다릅니다.',
}