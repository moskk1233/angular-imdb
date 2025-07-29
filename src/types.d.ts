interface MovieType {
    id:         number;
    name:       string;
    categories: string[];
    score:      number;
    director:   PeopleNameType;
    writer:     PeopleNameType;
    star:       PeopleNameType;
    image:      string;
    description: string;
}

interface PeopleNameType {
    id:   number;
    name: string;
}

interface PeopleType {
    id:          number;
    name:        string;
    description: string;
    image:       string;
    age:         number;
}
