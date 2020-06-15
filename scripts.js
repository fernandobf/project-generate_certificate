// Receber/validar senha 
// Registrar número de acessos

var emailVerify = prompt("Insira seu email (o mesmo usado na inscrição do treinamento)");
var emailVerify = emailVerify.toLowerCase().trim();

if (emailVerify == '') {
    alert("Por favor, digite seu e-mail.)");
}else{
    window.addEventListener('load', () => {
        let content = document.querySelector('#content');
        fetchPeople();
    });
}

async function fetchPeople(e) {
    try {
        const url   = "data.json";
        const res   = await fetch(url);
        const json  = await res.json();

        listPeople = json.map(person => {
            const { name, email } = person;
            return {
                name,
                email,
            }
        })
        findPerson();
    }catch (e){
        console.error();
    }
}

function findPerson() {
    const result = listPeople.find( person => person.email === emailVerify );
    if(result == undefined){
        alert('Seu e-mail não foi localizado em nossa lista. Por favor tente nocamente ou envie um e-mail para fernandobf@globo.com.');
    }
    renderResults(result.name);
}

function renderResults(name){

    let htmlPrint = 
    `
    <p>Certifico que <span class="name">${name}</span> participou do <strong><i>Treinamento em Remuneração</i></strong> onde foram abordados os temas abaixo, com carga horário total de 04 horas.</p>
    <ul>
        <li>Plano de cargos e salários (descrição, avaliação e arquitetura salarial);</li>
        <li>Remuneração Executiva;</li>
        <li>Incentivos de Curto e Longo Prazo e;</li>
        <li>Tendências sobre recompensar no Futuro do Trabalho.</li>
    </ul>
    <p>Rio de Janeiro, 15 de junho de 2020.</p>
    <div class="signature">
        <img src="signature.png">
        <strong>Nelson Bravo</strong> <small>- Instrutor -</small>
    </div>
    <img src="logos.png" class="logo">
    `
    content.innerHTML = htmlPrint;
};