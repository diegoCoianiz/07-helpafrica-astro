// Create schemas and interfaces: 

export interface Socials {
    socials: Social[];
}

export interface Social {
    id:   number;
    name: string;
    href?: string;
    icon: string;
    uid?: string;
}

export interface Socials {
    teamMembers: TeamMember[];
}

export interface TeamMember {
    id:           number;
    uid:          string;
    firstName:    string;
    lastName:     string;
    username:     string;
    email:        string;
    avatar:       string;
    gender:       string;
    phoneNumber:  string;
    subscription: Subscription;
}

export interface Subscription {
    plan:          string;
    status:        string;
    paymentMethod: string;
    term:          string;
}

export interface Clients {
    clients: Client[];
}

export interface Client {
    id:           number;
    uid:          string;
    firstName:    string;
    lastName:     string;
    username:     string;
    email:        string;
    avatar:       string;
    gender:       string;
    phoneNumber:  string;
    subscription: Subscription;
}

export interface Subscription {
    plan:          string;
    status:        string;
    paymentMethod: string;
    term:          string;
}

export interface Volunteers {
    volunteers: Volunteer[];
}

export interface Volunteer {
    id:           number;
    uid:          string;
    firstName:    string;
    lastName:     string;
    username:     string;
    email:        string;
    avatar:       string;
    gender:       string;
    phoneNumber:  string;
    subscription: Subscription;
}

export interface Subscription {
    plan:          string;
    status:        string;
    paymentMethod: string;
    term:          string;
}

