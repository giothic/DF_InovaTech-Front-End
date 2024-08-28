#include <stdlib.h>
#include <stdio.h>
#include <locale.h>
#include <math.h>

int main() void
{

    setlocale(LC_ALL, "Portuguese");

    char nome;
    int anoNasc, idade;
    float altura;

    printf("Digite seu nome:  ");
    scanf("%s", &nome);

    printf("\nDigite o seu ano de nascimento:  ");
    scanf("%i", &anoNasc);

    printf("\nDigite sua altura (em metros)");
    scanf("%f", &altura)

    idade = anoNasc - 2024;

    if (idade >= 18)
    {
        printf("\n %s tem %i, é maior de idade e tem %2.f de altura.", nome, idade, altura);
    }
    else
    {
        printf("\n %s tem %i, é menor de idade e tem %2.f de altura.", nome, idade);
    }

    return 0;
}