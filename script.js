class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}
class AddressBook {
  constructor() {
    this.contact = [];
  }
  add(name, email, phone, relation) {
    // new Contact(name, email, phone, relation);
    this.contact.push(new Contact(name, email, phone, relation));
  }
  deleteAt(index) {
    this.contact.splice(index, 1);
  }
}
function print() {
  console.log(folk);
}
function display() {
  document.querySelector(".content").innerHTML = "";
  for (let i = 0; i < folk.contact.length; i++) {
    let folker = folk.contact[i];
    let cont = document.createElement("div");
    cont.classList.add("singleContact");
    let somename = document.querySelector(".content");
    somename.appendChild(cont);
    cont.innerHTML = ` <p>Name: ${folker.name},</p>
    <p>Email: ${folker.email},</p>
    <p>Phone#: ${folker.phone},</p>
    <p>Relation: ${folker.relation}</p>
    <i class="fa fa-trash>W</i>`;
    cont.dataset.index = i;
  }
}
const form = document.querySelector("form");
form.addEventListener("submit", addContact);
function addContact(e) {
  e.preventDefault();
  const formData = new FormData(form);
  AddressBook.addContact(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  form.reset();
  display();
}
function deleteContact(e) {
  if (e.target.classList.contains(icon, name)) {
    const index = e.target.getAttribute("data-index-number");
    AddressBook.deleteAt(index);
    display();
  }
}
const folk = new AddressBook();
folk.add("Devi", "deveairewilliams@gmail.com", "586-999-9999", "Bro");
folk.add("My Baby", "tiffanymair27@gmail.com", "586-444-4434", "My Boo");
print();
display();
// folk.deleteAt((index = 1));
// console.log(folk);
