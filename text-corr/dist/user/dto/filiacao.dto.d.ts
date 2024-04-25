export declare class CreateFiliacaoDto {
    nome: string;
    endereco: string;
    cidade: string;
    bairro: string;
    uf: string;
    userId: number;
}
declare const UpdateFilicacaoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFiliacaoDto>>;
export declare class UpdateFilicacaoDto extends UpdateFilicacaoDto_base {
}
export {};
