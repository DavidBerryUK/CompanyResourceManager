namespace CRM.Models.Rest.AssetType
{
    /// <summary>
    /// Extended models are used to display the full information for an entity,
    ///  These will include reference data from additional database tables.
    ///
    /// The Extended models will always be a super class of the summery model
    /// to ensure that this minimum amount of data is always available in
    /// the front end system
    /// </summary>
    public class AssetTypeExtended : AssetTypeSummary
    {
    }
}
