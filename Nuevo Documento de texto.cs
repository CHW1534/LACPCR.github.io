using System;

class Temperatura
{
    private double valor;
    private string escala;

    public Temperatura(double valor, string escala)
    {
        this.valor = valor;
        this.escala = escala;
    }

    public double GetValor()
    {
        return valor;
    }

    public string GetEscala()
    {
        return escala;
    }

    public override string ToString()
    {
        return valor + " °" + escala;
    }
}

class Conversor
{
    public double CaF(double c) // Celsius a Fahrenheit
    {
        return (c * 9 / 5) + 32;
    }

    public double CaK(double c) // Celsius a Kelvin
    {
        return c + 273.15;
    }

    public double FaC(double f) // Fahrenheit a Celsius
    {
        return (f - 32) * 5 / 9;
    }

    public double FaK(double f) // Fahrenheit a Kelvin
    {
        return (f - 32) * 5 / 9 + 273.15;
    }

    public double KaC(double k) // Kelvin a Celsius
    {
        return k - 273.15;
    }

    public double KaF(double k) // Kelvin a Fahrenheit
    {
        return (k - 273.15) * 9 / 5 + 32;
    }

    // Método general
    public double Convertir(double valor, string origen, string destino)
    {
        origen = origen.ToUpper();
        destino = destino.ToUpper();

        if (origen == destino)
            return valor;

        if (origen == "C" && destino == "F") return CaF(valor);
        if (origen == "C" && destino == "K") return CaK(valor);

        if (origen == "F" && destino == "C") return FaC(valor);
        if (origen == "F" && destino == "K") return FaK(valor);

        if (origen == "K" && destino == "C") return KaC(valor);
        if (origen == "K" && destino == "F") return KaF(valor);

        throw new ArgumentException("Conversión no válida.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Ingrese el valor de la temperatura: ");
        double valor = Convert.ToDouble(Console.ReadLine());

        Console.Write("Ingrese la escala de origen (C, F, K): ");
        string origen = Console.ReadLine();

        Console.Write("Ingrese la escala de destino (C, F, K): ");
        string destino = Console.ReadLine();

        // Crear objeto temperatura
        Temperatura temp = new Temperatura(valor, origen);

        // Usar conversor
        Conversor conv = new Conversor();
        double resultado = conv.Convertir(temp.GetValor(), temp.GetEscala(), destino);

        Console.WriteLine($"Temperatura convertida: {resultado} °{destino}");
    }
}
