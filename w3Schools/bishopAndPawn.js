// A, B, C, D, E, F, G, H
// 1, 2, 3, 4, 5, 6, 7, 8

function bishopAndPawn(bishop, pawn){

    let bispo = bishop.toUpperCase();
    let peao = pawn.toUpperCase();

    let possivel = false
    const chess = [
        {H:["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8"]},
        {G:["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8"]},
        {F:["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8"]},
        {E:["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"]},
        {D:["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"]},
        {C:["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"]},
        {B:["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"]},
        {A:["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"]}
    ]
    const [cc, nn] = bishop;
    console.log(cc);
    console.log(nn);

    for(let i = 0; i < 8; i++){

    }

}
let casa1 = "a1";
let casa2 = "c3";
bishopAndPawn(casa1, casa2);