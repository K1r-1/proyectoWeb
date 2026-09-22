from django.shortcuts import render
from .models import Producto


def producto_lista(request):
    productos = Producto.objects.select_related('categoria').all()
    contexto = {'productos': productos}
    return render(request, 'catalogo/lista.html', contexto)

def detalle_producto(request, pk):
    producto = Producto.objects.get(pk = pk)
    contexto = {'producto' : producto}
    return render(request, 'catalogo/unico.html', contexto)