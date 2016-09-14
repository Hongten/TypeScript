//// [narrowingConstrainedTypeParameter.ts]

// Repro from #10811

interface Pet {
    name: string;
}

function isPet(pet: any): pet is Pet {
    return typeof pet.name === "string";
}

export function speak<TPet extends Pet>(pet: TPet, voice: (pet: TPet) => string): string {
    if (!isPet(pet)) {
        throw new Error("Expected \"pet\" to be a Pet");
    }
    return voice(pet);
}

//// [narrowingConstrainedTypeParameter.js]
// Repro from #10811
"use strict";
function isPet(pet) {
    return typeof pet.name === "string";
}
function speak(pet, voice) {
    if (!isPet(pet)) {
        throw new Error("Expected \"pet\" to be a Pet");
    }
    return voice(pet);
}
exports.speak = speak;
