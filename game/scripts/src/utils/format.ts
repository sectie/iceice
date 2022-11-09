export function format(value?: unknown): string {
    return tostring(value);
};

function IsRealHero(value?: unknown): value is CDOTA_BaseNPC_Hero {
    // @ts-expect-error
    return value.IsRealHero != null && value.IsRealHero();
}

function IsHero(value?: unknown): value is CDOTA_BaseNPC_Hero {
    // @ts-expect-error
    return value.IsHero && value.IsHero();
}