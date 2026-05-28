using System.Collections.Generic;

namespace ExpenseQuickSortAPI
{
    public class QuickSort
    {
        public static void Ordenar(List<Gasto> gastos, int inicio, int fim)
        {
            if (inicio < fim)
            {
                int pivo = Particionar(gastos, inicio, fim);

                Ordenar(gastos, inicio, pivo - 1);

                Ordenar(gastos, pivo + 1, fim);
            }
        }

        static int Particionar(List<Gasto> gastos, int inicio, int fim)
        {
            double pivo = gastos[fim].Valor;

            int i = inicio - 1;

            for (int j = inicio; j < fim; j++)
            {
                if (gastos[j].Valor > pivo)
                {
                    i++;

                    Gasto temp = gastos[i];

                    gastos[i] = gastos[j];

                    gastos[j] = temp;
                }
            }

            Gasto troca = gastos[i + 1];

            gastos[i + 1] = gastos[fim];

            gastos[fim] = troca;

            return i + 1;
        }
    }
}