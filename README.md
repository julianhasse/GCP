# Guitar Center Products
By Julian Hasse 
(based on Deborah Kurata's tutorial)

## Install
>npm install
>ng serve -o

## Login
You can use any name and password. This release won't check credentials but your name will appear in the user section.

## Angular core competencies, patterns, and best practices applied in this demo

### 1 Inter-component communication:
Components created: 
* AppComponent (includes top navigation and router outlets (Root and PopUp))
* WelcomeComponent (splash and credits) Dummy component.
* MessageComponent (logs and displays user's activity. PopUp component in a "forChild outlet")
* ProductList (parent product component), ProductDetail, ProductEdit, ProductEditTags to manage the product list views. 
* StarComponent (this component utilizes an @Input() decorator to receive data from the parent component via property binding 
<pm-star [rating]="product.starRating">, and features an @Output() decorator to emit an event when clicked. (It will log out "clicked" in the console)

### 2 Sharing content across components
* Actual products are shared through a "in-memory web api" service (product.service.ts), (product.ts) is the interface that defines the entity, (product.data.ts) has the hard coded object with product details. This service is provided via @Injectable for the whole app (root).
* (Messages) is a service used in the MessageComponent (popup) which is shared with the whole app (root) via dependency injection in the constructor class (constructor(private messageService: MessageService) 
* Router features primary, secondary and child routes. The app uses "Route Guards" In order to limit access to a route, warn the user before he leaves the app, or retrieve data before accessing a route. Route Guards are built as a regular Angular Service (available across components).

### 3 General module/project structure and methodology
* Modules created (via NgModule decorator): app.module (bootstrap and main components), product.module (feature modules for product data, details, list and edit), and message.module (feature module for messages PopUp component). 

### 4 Handling data requirements on application start
* This app uses pre-fetching data before activating a route through resolvers. 
* It also protect routes with guards ("canActivate") to guard navigation to a route.
* In order to speed up the app's startup time we use Lazy Loading (via "loadChildren()") for the ProductModule (that's why we used 2 "feature modules", Routes were grouped under a single parent, and ProductModule is NOT added to the list of the app.module's imports). You can check Lazy Loading is working via the NETWORKS tab in he Chrome Developer's Tab (load the app, login and then refresh the browser and you'll see the new js bundle loading!)

### 5 Manipulation of data via pipes
* In "product-list.component.html" we use ->  <td>{{ product.price | currency:"USD":"symbol":"1.2-2" }}</td> in order to transform bound properties before they are displayed (currency field).

### 6 Observables and Subscriptions
In order to manage asynchronous data we used Observables ("pipeable operators") and Reactive Extensions (RxJS) for the Product service:
```getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)```
