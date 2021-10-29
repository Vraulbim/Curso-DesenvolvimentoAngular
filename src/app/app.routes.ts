import { Routes } from "@angular/router";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";


export const rootRouterConfig : Routes = [
    { path: '', redirectTo: '/Inicio', pathMatch: 'full'},
    { path: 'Inicio', component: HomeComponent},
    { path: 'Contato', component: ContatoComponent},
    { path: 'Sobre', component: SobreComponent},
    { path: 'DataBinding', component: DataBindingComponent},
    { path: 'Produtos', component: ListaProdutoComponent},
    { path: 'Produtos-detalhes/:id', component: ListaProdutoComponent},
    { path: 'Carrinho/:id', component: ListaProdutoComponent}
];