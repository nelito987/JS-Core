class TrainingCourse{
    constructor(title, trainer){
        this.title = title;
        this.trainer = trainer;

        this.topics = [];
    }

    addTopic(title, date){
        let newTopic = {
            title: title,
            date: date
        };
        this.topics.push(newTopic);
        this.topics.sort((a, b) => a.date - b.date);
        return this;
    }

    get firstTopic(){
        return this.topics.sort((a, b) => a.date - b.date)[0];
    }

    get lastTopic(){
        return this.topics.sort((a, b) => b.date - a.date)[0];
    }

    toString(){
        let result = 'Course "' + this.title + '" by ' + this.trainer + '\n';
        result += this.topics.map(t => ` * ${t.title} - ${t.date}`).join(`\n`);
        return result;
    }
}