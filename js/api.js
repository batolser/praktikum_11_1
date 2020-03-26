class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    makeFetch(url, method = 'GET', body = undefined) {
        if (body) {
            body = JSON.stringify(body);
        }
        return fetch(`${this.baseUrl}/${url}`, {
            method,
            headers: this.headers,
            body
        })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject('Ошибка');
                }
                return res.json();
            })
            .catch(err => {
                console.log(err);
            })
    }

    getUser() {
        return this.makeFetch(`users/me`);

    }


    getInitialCards() {
        return this.makeFetch(`cards`);

    }

    patchUser(name, about) {
        return this.makeFetch(`users/me`, 'PATCH', { name, about })
        // .then((res) => {
        // return res.json();
        //  })

    }
}


/**
 * Здравствуйте.
 *
 * Работа в целом хорошая, но почему вы перегружаете всю страницу при редактировании профиля
 * Поправьте пожалуйста. Считаю это не серъёзной ошибкой но которую следует поправить.
 *
 * В целом по работе у вас хорошо, работа принимается.
 *
 * Из можно лучше : catch при ошибках я бы вынес в отдельную функцию
 *
 */