export function getEligibleSchemes(profile, allSchemes) {
  return allSchemes.filter(sch =>
    (!sch.minIncome || profile.income >= sch.minIncome) &&
    (!sch.maxIncome || profile.income <= sch.maxIncome) &&
    (!sch.minAge || profile.age >= sch.minAge) &&
    (!sch.state || profile.state === sch.state)
  );
}
