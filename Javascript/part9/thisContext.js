const person = {
    name: 'Sushodhan',
    greet(){
        console.log(`Hi my name is ${this.name}`);
    }
}
person.greet();

const thisIsReferemce = person.greet;

thisIsReferemce();

// const boundGreet = person.greet.bind({name:"jhone"});
// boundGreet();

const boundGreet = person.greet.call({name:"sush"});
// boundGreet();