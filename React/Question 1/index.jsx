

const bookList = {
    'male': [
        'Sea and the Ode',
        'The Children of Shangri-La',
        'Scent of Fear'
    ],
    'female': [
        'Electric Touch',
        'The Devil\'s Trap',
        'Dark Good Looks'
    ], 
    'other': [
        'Winged Abyss',
        'The Ebony Daffodil',
        'Plague of Glass'
    ]
};

const book_suggestions = (props) => {
    const suggested = (user) => {
        let books = [];

        let gender = user.gender;

        if (gender == 'male') {
            for (var i = 0; i < bookList['male'].length; i++) {
                books.push(bookList['male'][i])
            }
        } else if (gender = 'female') {
            for (var i = 0; i < bookList['female'].length; i++) {
                books.push(bookList['female'][i])
            }
        } else {
            for (var i = 0; i < bookList['other'].length; i++) {
                books.push(bookList['other'][i])
            }
        }

        return books;
    }

    const book_list = function (user) {
        const books = suggested(props.user);
        
        return (
            <ul>
                { books.map((book) => { 
                    return (
                        <li>
                            { book }
                        </li>
                    )
                })}
            </ul>
        )
    }



    return (
        <div>
            <UserName user={{ Name: 'John Doe'}}/>
        </div>
        <div>
            { book_list() }
        </div>
    )
}

const UserName = (user) => {
    return (
        <div>
            { 'These are the suggested books for ' + user.name + ". Please Enjoy"}
        </div>
    )
}

export default book_suggestions;