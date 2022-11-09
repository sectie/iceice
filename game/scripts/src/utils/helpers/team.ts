// helper functions to work with teams
export function ChangeTeam(hero: CDOTA_BaseNPC_Hero, targetTeam: DotaTeam) {
    let player = hero.GetPlayerOwner();
    if (!player) return;
    player.SetTeam(targetTeam);
    hero.SetTeam(targetTeam);
}