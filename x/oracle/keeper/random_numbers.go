package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	gogotypes "github.com/gogo/protobuf/types"
	"github.com/slandymani/odin-workshop/x/oracle/types"
)

// SetRandomNumbersResult saves the RandomNumbers result
func (k Keeper) SetRandomNumbersResult(ctx sdk.Context, requestID types.OracleRequestID, result types.RandomNumbersResult) {
	store := ctx.KVStore(k.storeKey)
	store.Set(types.RandomNumbersResultStoreKey(requestID), k.cdc.MustMarshal(&result))
}

// GetRandomNumbersResult returns the RandomNumbers by requestId
func (k Keeper) GetRandomNumbersResult(ctx sdk.Context, id types.OracleRequestID) (types.RandomNumbersResult, error) {
	bz := ctx.KVStore(k.storeKey).Get(types.RandomNumbersResultStoreKey(id))
	if bz == nil {
		return types.RandomNumbersResult{}, sdkerrors.Wrapf(types.ErrSample,
			"GetResult: Result for request ID %d is not available.", id,
		)
	}
	var result types.RandomNumbersResult
	k.cdc.MustUnmarshal(bz, &result)
	return result, nil
}

// GetLastRandomNumbersID return the id from the last RandomNumbers request
func (k Keeper) GetLastRandomNumbersID(ctx sdk.Context) int64 {
	bz := ctx.KVStore(k.storeKey).Get(types.KeyPrefix(types.LastRandomNumbersIDKey))
	intV := gogotypes.Int64Value{}
	k.cdc.MustUnmarshalLengthPrefixed(bz, &intV)
	return intV.GetValue()
}

// SetLastRandomNumbersID saves the id from the last RandomNumbers request
func (k Keeper) SetLastRandomNumbersID(ctx sdk.Context, id types.OracleRequestID) {
	store := ctx.KVStore(k.storeKey)
	store.Set(types.KeyPrefix(types.LastRandomNumbersIDKey),
		k.cdc.MustMarshalLengthPrefixed(&gogotypes.Int64Value{Value: int64(id)}))
}
