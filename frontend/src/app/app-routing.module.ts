import {LoginComponent} from "./pages/login/login.component";
import {TracksComponent} from "./pages/tracks/tracks.component";
import {NewTrackComponent} from "./pages/new-track/new-track.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
	{path: "login", component: LoginComponent},
	{path: "tracks", component: TracksComponent},
	{path: "new-track", component: NewTrackComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
