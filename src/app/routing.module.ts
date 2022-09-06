import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ProductListSidebarComponent } from "./product-list-sidebar/product-list-sidebar.component";
import {ProductVciComponent} from './product-vci/product-vci.component';

const routes: Routes = [
  { path: "products", component: ProductListComponent },
  { path: "product/:id", component: ProductListComponent, children:[
    {
      path: "",
      redirectTo: 'chat', pathMatch: 'full'
    },
    {
      path: "chat/:id",
      component: ProductListSidebarComponent,
      outlet: "chat"
    }
  ]},
  {
    path: "vci/:id",
    component: ProductVciComponent, children:[
      {
        path: "chat/:id",
        component: ProductListSidebarComponent,
        outlet: "chat"
      }
    ]
  },
  // {
  //   path: "chat",
  //   component: ProductListSidebarComponent,
  //   outlet: "sidebar"
  // }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
