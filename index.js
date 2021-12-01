function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}
function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

//1.
console.log('-----------1------------')

let egzaminoRezultatas = rand(1, 10);

if (egzaminoRezultatas > 3){
    console.log('Išlaikytas')
}
else{
    console.log('Neišlaikytas')
}
 
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4
//2.
console.log('-----------2------------')

let eksperimentoRezultatas = rand(1, 4);

if (eksperimentoRezultatas == 1){
    console.log('Pavyko', eksperimentoRezultatas)
}
else if (eksperimentoRezultatas == 4){
    console.log('Pavyko', eksperimentoRezultatas)
}
else{
    console.log('Nepavyko', eksperimentoRezultatas)
}


// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4
//3.
console.log('-----------3------------')

let automobilioGreitis = rand(40, 125);

if (automobilioGreitis > 60){
    let bauda =(automobilioGreitis - 60)*5;
    console.log('Bauda', bauda, automobilioGreitis);
}
else {
    console.log('Neviršytas greitis', automobilioGreitis)
};


// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5
//4.
console.log('-----------4------------')

let eilesNumeris = rand(1, 30);

if(eilesNumeris % 2 == 0) {
    console.log('Lyginis', eilesNumeris)
}
else {
    console.log('Nelyginis', eilesNumeris )
}


// Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė
//5.
console.log('-----------5------------')

let raidesABC = rand(1, 3);

if(raidesABC == 1){
    console.log('raide A')
}
else if (raidesABC == 2){
    console.log('raide B')
}
else{
    console.log('raide C')
}


//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę
//6.
console.log('-----------6------------')

let pirmas = rand(0, 5);
let antras = rand(0, 5);


if (pirmas * antras > pirmas + antras){
    console.log('Sandauga didesnė', pirmas, '*', antras, '=', pirmas * antras);
}
else if (pirmas * antras == pirmas + antras) {
    console.log('Lygu', pirmas, '+/*', antras, '=', pirmas + antras);
}
else{
    console.log('Suma didesnė', pirmas, '+', antras, '=', pirmas + antras )
}

// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma 
//7.
console.log('-----------Neveikia linksniai------------')

let asilai = rand(0, 2);
let karves = rand(0, 2);

if (asilai + karves == 0){
    console.log('Gyvulių nėra');
}
else if (asilai == 1, karves == 0){
    console.log('Gyvulių yra', asilai, 'asilas ir', karves, 'karvių');
}
else if (asilai == 2, karves == 0){
    console.log('Gyvulių yra', asilai, 'asilai ir', karves, 'karvių');
}
else if (asilai == 0, karves == 1){
    console.log('Gyvulių yra', asilai, 'asilų ir', karves, 'karvė');
}
else if (asilai == 0, karves == 2){
    console.log('Gyvulių yra', asilai, 'asilų ir', karves, 'karvės');
}
else if (asilai == 1, karves == 1){
    console.log('Gyvulių yra', asilai, 'asilas ir', karves, 'karvė');
}
else if (asilai == 1, karves == 2){
    console.log('Gyvulių yra', asilai, 'asilas ir', karves, 'karvės');
}
else if (asilai == 2, karves == 1){
    console.log('Gyvulių yra', asilai, 'asilai ir', karves, 'karvė');
}
else if (asilai == 2, karves == 2){
    console.log('Gyvulių yra', asilai, 'asilai ir', karves, 'karvės');
}
else{
    console.log('Gyvulių yra', asilai, 'asilai ir', karves, 'karvės');
}

// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų
//8.
console.log('-----------8------------')

let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);

if (dalyvis1 + dalyvis2 > 6) {
    console.log('Laimėjo', dalyvis1 + dalyvis2);
}
else if(dalyvis1 == dalyvis2){
    console.log('Laimėjo', dalyvis1, dalyvis2);
}
else{
    console.log('Pralaimėjo', dalyvis1 + dalyvis2)
}

// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju 
//9.
console.log('-----------9------------')

let daug = rand(1000000, 9999999);

if (daug % 5 == 0, daug % 10 == 0, daug % 33 ==0){
    console.log('Dalinasi iš trijų skaičių', daug, 'iš penkių', daug / 5, 'iš dešimt', daug / 10, 'iš trisdešimt trijų', daug / 33);
}
else if(daug % 5 == 0, daug % 10 == 0){
    console.log('Dalinasi iš dviejų skaičių', daug, 'iš penkių', daug / 5, 'iš dešimt', daug / 10);
}
else if(daug % 5 == 0, daug % 33 == 0){
    console.log('Dalinasi iš dviejų skaičių', daug, 'iš penkių', daug / 5, 'iš trisdešimt trijų', daug / 33);
}
else if(daug % 10 == 0, daug % 33 == 0){
    console.log('Dalinasi iš dviejų skaičių', daug, 'iš dešimt', daug / 10, 'iš trisdešimt trijų', daug / 33);
}
else if(daug % 5 == 0){
    console.log('Dalinasi iš vieno skaičiaus', daug, 'iš penkių', daug / 5);
}
else if(daug % 10 == 0){
    console.log('Dalinasi iš vieno skaičiaus', daug, 'iš penkių', daug / 10);
}
else if(daug % 33 == 0){
    console.log('Dalinasi iš vieno skaičiaus', daug, 'iš penkių', daug / 33);
}
else{
    console.log('Nesidalina', daug);
}

// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.
//10.
console.log('-----------Kartais neveikia------------')
// 0 = zirkles, 1 = popierius, 2 = akmuo.

let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'žirklės') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'žirklės') : 'akmuo';



if(as == 'žirklės'){
    if(tu == 'popierius'){
        console.log('Aš laimėjau: žirklės nugali popierių', as, tu)
    }
}
else if(as == 'žirklės'){
    if(tu == 'žirklės'){
        console.log('Lygu')   
    }
}
else if(as == 'žirklės'){
    if(tu == 'akmuo'){
        console.log('Tu laimėjai: žirklės pralaimi akmeniui', as, tu)   
    }
}
else if(as == 'popierius'){
    if(tu == 'žirklės'){
        console.log('Tu laimėjai: popierius pralaimi žirklėms', as, tu)   
    }
}
else if(as == 'popierius'){
    if(tu == 'popierius'){
        console.log('Lygu', as, tu)   
    }
}
else if(as == 'popierius'){
    if(tu == 'akmuo'){
        console.log('Aš laimėjau: popierius popierius nugali akmenį', as, tu)   
    }
}
else if(as == 'akmuo'){
    if(tu == 'žirklės'){
        console.log('Aš laimėjau: akmuo nugali žirkles', as, tu)   
    }
}
else if(as == 'akmuo'){
    if(tu == 'popierius'){
        console.log('Tu laimėjai: popierius nugali akmenį', as, tu)   
    }
}
else if(as == 'akmuo'){
    if(tu == 'akmuo'){
        console.log('Lygu', as, tu)   
    }
}
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu



