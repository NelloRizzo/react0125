"use strict";
/*
Supponiamo di voler gestire un [blog] in cui sia possibile pubblicare [articoli] o
effettuare [commenti] ad articoli di altri utenti

Cosa si intende per blog?
Un blog è un insieme di articoli.

Cosa si intende per articolo?
Un [articolo] è caratterizzato da *un* [autore], *un* [titolo], *un* [contenuto] e *una* [data di pubblicazione].
    Cosa si intende per autore, e per titolo, e per contenuto e per data? un autore è un nome, un titolo e un contenuto sono testi,
    una data di pubblicazione è una data

    +-----------------------------+
    | 1 Articolo                  |
    +-----------------------------+
    | 1 autore                A   |
    | 1 titolo                A   |
    | 1 contenuto             A   |
    | 1 data-pubblicazione    D   |
    +-----------------------------+
*/
class Author {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() { return `${this.firstName[0]}. ${this.lastName}`; }
}
class Article {
    //private author: string
    //private title: string
    //private content: string
    //private publishedAt: Date
    //constructor(author: string, title: string, content: string, publishedAt: Date) {
    //    this.author = author
    //    this.title = title
    //    this.content = content
    //    this.publishedAt = publishedAt
    //}
    constructor(_author, _title, _content, _publishedAt) {
        this._author = _author;
        this._title = _title;
        this._content = _content;
        this._publishedAt = _publishedAt;
    }
    set publishedAt(date) {
        if (date.getTime() - this._publishedAt.getTime() > 0)
            this._publishedAt = date;
    }
    get author() { return this._author; }
    get title() { return this._title; }
    get content() { return this._content; }
    get publishedAt() { return this._publishedAt; }
    write() {
        console.log(this._title, 'pubblicato il', this._publishedAt, 'da', this.author.fullName);
        console.log(this._content);
    }
}
class ArticleWithHeader extends Article {
    constructor(_author, _title, _content, _publishedAt, imageUrl) {
        super(_author, _title, _content, _publishedAt);
        this.imageUrl = imageUrl;
    }
    write() {
        console.log('Header image', this.imageUrl);
        super.write();
    }
}
let a1 = new Article(new Author('Mickey', 'Mouse'), 'Lorem', 'Lorem ipsum dolor sit amet', new Date());
a1.publishedAt = new Date(2025, 2, 2);
console.log(a1);
a1.publishedAt = new Date(2024, 2, 2);
console.log(a1);
a1.write();
let ah = new ArticleWithHeader(new Author("Archimede", 'Pitagorico'), 'Tesi', 'Il mio laboratorio è invso dagli alieni', new Date(), 'https://picsum.photos/300/150');
ah.write();
/*
Cosa si intende per commento?
un commento è un testo collegato ad un articolo pubblicato in una determinata data.

    +-----------------------------+
    | Commento                    |
    +-----------------------------+
    | contenuto                A  |
    | data-pubblicazione       D  |
    | Articolo collegato          |
    +-----------------------------+
*/
class Mention {
    constructor(author, content, publishedAt, article) {
        this.author = author;
        this.content = content;
        this.publishedAt = publishedAt;
        this.article = article;
    }
}
