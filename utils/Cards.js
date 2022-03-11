const manCards = function (manArray) {
    let card = '';
    for (let i=0; i<manArray.length; i++){
        card += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${manArray[i].name}</h4>
          <h5>Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manArray[i].id}</li>
          <li class="list-group-item">Email: ${manArray[i].email}</li>
          <li class="list-group-item">Office Number: ${manArray[i].officeNumber}</li>
        </ul>
      </div>`
    }
    // cards.push(card)
    // return cards;
    return card;
}
const engCards = function (engArray) {
    let card = '';
    for (let i=0; i<engArray.length; i++){
        card += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${engArray[i].name}</h4>
          <h5>Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engArray[i].id}</li>
          <li class="list-group-item">Email: ${engArray[i].email}</li>
          <li class="list-group-item">Github: ${engArray[i].github}</li>
        </ul>
      </div>`
    }
    // cards.push(card)
    // return cards;
    return card;
}
const intCards = function (intArray) {
    let card = '';
    for (let i=0; i<intArray.length; i++){
        card += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${intArray[i].name}</h4>
          <h5>Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intArray[i].id}</li>
          <li class="list-group-item">Email: ${intArray[i].email}</li>
          <li class="list-group-item">School: ${intArray[i].school}</li>
        </ul>
      </div>`
    }
    // cards.push(card)
    // return cards;
    return card;
  }

module.exports = manCards;
module.exports = engCards;
module.exports = intCards;
// module.exports = cards;