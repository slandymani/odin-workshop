package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/slandymani/odin-workshop/x/oracle/types"
)

// RandomNumbersResult returns the RandomNumbers result by RequestId
func (k Keeper) RandomNumbersResult(c context.Context, req *types.QueryRandomNumbersRequest) (*types.QueryRandomNumbersResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	result, err := k.GetRandomNumbersResult(ctx, types.OracleRequestID(req.RequestId))
	if err != nil {
		return nil, err
	}
	return &types.QueryRandomNumbersResponse{Result: &result}, nil
}

// LastRandomNumbersId returns the last RandomNumbers request Id
func (k Keeper) LastRandomNumbersId(c context.Context, req *types.QueryLastRandomNumbersIdRequest) (*types.QueryLastRandomNumbersIdResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	id := k.GetLastRandomNumbersID(ctx)
	return &types.QueryLastRandomNumbersIdResponse{RequestId: id}, nil
}
