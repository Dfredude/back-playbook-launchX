class User {
    constructor({ id, username, name, bio, dateCreated, lastUpdated}){
        this.id = id,
        this.username = username,
        this.name = name,
        this.bio = bio,
        this.dateCreated = new Date(),
        this.lastUpdated = new Date()
    }
    get getUsername(){
        return this.username
    }
    get getBio(){
        return this.bio
    }
    get getDateCreated(){
        return this.dateCreated
    }
    get getLastUpdated(){
        return this.lastUpdated
    }

    /**
     * @param {(arg0: string) => void} username
     */
    set setUsername(username){
        this.username = username
    }

    /**
     * @param {(arg0: string) => void} bio
     */
    set setBio(bio){
        this.bio = bio
    }
}

module.exports = User