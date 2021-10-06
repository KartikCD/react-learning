import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'work on website', 1000);
// docTwo = new Payment('mario', 'work on website', 1000);

// const invOne = new Invoice('mario', 'work on mario website', 100);
// const invTwo = new Invoice('luigi', 'work on luigi website', 500);

// const invoices: Invoice[] = [];

// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.format());
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul)


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    
    list.render(doc, type.value, 'end');
})