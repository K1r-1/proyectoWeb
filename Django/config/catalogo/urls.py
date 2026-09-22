from django.urls import path
from . import views

urlpatterns = [
path('', views.producto_lista, name='producto_lista'),
path('productos/<int:pk>/', views.detalle_producto, name='producto_detalle')
]
