
export const TOKEN_KEY = "@invext-Token";

export const returnToken = () => localStorage.getItem(TOKEN_KEY);

export const setarToken = (token: string, callback : VoidFunction) => {
    localStorage.setItem(TOKEN_KEY, token);
    callback();
};

export const destroyToken = (callback: VoidFunction) => {
    localStorage.removeItem(TOKEN_KEY,);
    callback();
};



