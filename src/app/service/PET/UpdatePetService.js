const ListPetService = require("./ListPetService")


const UpdatePetService = {
    updatePet: (
        id,
        name,
        peso,
        tipoSanguineo,
        raca,
        idade,
        endereco
    ) => {
        const pets = ListPetService.listPetServ()
        
        const petIndice = pets.findIndex(item => item.id === Number(id))
        
        if (!petIndice) {
            return {
                sucess: false,
                message: "Pet não encontrado"
            }
        }
        

        pets[petIndice] = {
            id,
            name,
            peso,
            tipoSanguineo,
            raca,
            idade,
            endereco
        }
        
        return {
            sucess: true,
            message:
            pets[petIndice]
        }
    
    }
}

module.exports = UpdatePetService;