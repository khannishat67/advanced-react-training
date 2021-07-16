
const useAuthorName = () => {
    const author = localStorage.getItem('author');
    if (author) {
        return author;
    } else {
        return 'Anonymous'
    }
}

const useIsLoggedIn = () => {
    if (localStorage.getItem("user")) {
        return true
    }
    return false
}
const useCurrentUser = () => {
    let user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }
    return null
}
export {useAuthorName, useIsLoggedIn, useCurrentUser};