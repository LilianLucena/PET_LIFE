import TutorModel from '../../model/TutorModel';
import ListTutorService from "./ListTutorService";

export default class UpdateTutorService {
    constructor() {
        this.service = new ListTutorService();
}

async update (
        id,
        nome,
        email,
        username,
        senha,
        telefone,
        cep,
        bairro,
        cidade,
        uf) {
   try {
    const tutor = await TutorModel.findByPk(id);

        if (!tutor) {
            return {
                sucess: false,
                message: "Tutor(a) não encontrado"};
            }
        
        const [numeroDeRegistrosAtualizados] = await TutorModel.update(
            {
                nome,
                email,
                username,
                senha,
                telefone,
                cep,
                bairro,
                cidade,
                uf,
            },
            {
              where: { id },
            }
          );

        if (numeroDeRegistrosAtualizados === 0) {
        return { sucess: false, mensagem: "Dados iguais" };
      } else {
        return {
          id,
          nome,
          email,
          username,
          senha,
          telefone,
          cep,
          bairro,
          cidade,
          uf,
        };
    }
} catch (error) {
    console.log(error);
    return {sucess: false,
            message: error.message };
           }
        }
}