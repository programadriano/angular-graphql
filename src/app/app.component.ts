import { Component, OnInit } from "@angular/core";

import { Apollo } from "apollo-angular";
import { map } from "rxjs/operators";
import gql from "graphql-tag";
import { Produto, Query } from "./types/produto";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-graphql";

  produtos: Observable<Produto[]>;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.produtos = this.apollo
      .watchQuery<Query>({
        query: gql`
          {
            produtos {
              codigoBarras
              nome
            }
          }
        `
      })
      .valueChanges.pipe(map(result => result.data.produtos));
  }
}
