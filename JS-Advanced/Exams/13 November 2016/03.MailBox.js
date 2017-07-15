/**
 * Created by Neli on 15.7.2017 г..
 */
class MailBox{
    constructor(){
        this._mailbox = [];
    }

    get messageCount(){
        return this._mailbox.length;
    }

    addMessage(subject, text){
        this._mailbox.push({subject, text});
        return this;
    }

    deleteAllMessages(){
        this._mailbox = [];
    }

    findBySubject(substr){
        if(this._mailbox.length > 0){
            return this._mailbox.filter(m => m.subject.indexOf(substr) >= 0);
        }

        return [];
    }

    toString(){
        let result = '';
        if(this._mailbox.length == 0){
            result = ` * (empty mailbox)`;
        }else{
            for (let mail of this._mailbox) {
                result += ` * ['${mail.subject}'] ${mail.text}` + '\n';
            }
        }

        return result;
    }
}