using Microsoft.AspNetCore.Mvc;

namespace ExpenseQuickSortAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GastosController : ControllerBase
    {
        static List<Gasto> gastos = new List<Gasto>();

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(gastos);
        }

        [HttpPost]
        public IActionResult Adicionar(Gasto gasto)
        {
            gastos.Add(gasto);

            QuickSort.Ordenar(gastos, 0, gastos.Count - 1);

            return Ok(gastos);
        }
    }
}