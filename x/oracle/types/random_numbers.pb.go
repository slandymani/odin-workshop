// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: oracle/random_numbers.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type RandomNumbersCallData struct {
	Length int64 `protobuf:"varint,1,opt,name=length,proto3" json:"length,omitempty"`
}

func (m *RandomNumbersCallData) Reset()         { *m = RandomNumbersCallData{} }
func (m *RandomNumbersCallData) String() string { return proto.CompactTextString(m) }
func (*RandomNumbersCallData) ProtoMessage()    {}
func (*RandomNumbersCallData) Descriptor() ([]byte, []int) {
	return fileDescriptor_72b70b108183ba8f, []int{0}
}
func (m *RandomNumbersCallData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RandomNumbersCallData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RandomNumbersCallData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RandomNumbersCallData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RandomNumbersCallData.Merge(m, src)
}
func (m *RandomNumbersCallData) XXX_Size() int {
	return m.Size()
}
func (m *RandomNumbersCallData) XXX_DiscardUnknown() {
	xxx_messageInfo_RandomNumbersCallData.DiscardUnknown(m)
}

var xxx_messageInfo_RandomNumbersCallData proto.InternalMessageInfo

func (m *RandomNumbersCallData) GetLength() int64 {
	if m != nil {
		return m.Length
	}
	return 0
}

type RandomNumbersResult struct {
	Numbers []int64 `protobuf:"varint,1,rep,packed,name=numbers,proto3" json:"numbers,omitempty"`
}

func (m *RandomNumbersResult) Reset()         { *m = RandomNumbersResult{} }
func (m *RandomNumbersResult) String() string { return proto.CompactTextString(m) }
func (*RandomNumbersResult) ProtoMessage()    {}
func (*RandomNumbersResult) Descriptor() ([]byte, []int) {
	return fileDescriptor_72b70b108183ba8f, []int{1}
}
func (m *RandomNumbersResult) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RandomNumbersResult) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RandomNumbersResult.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RandomNumbersResult) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RandomNumbersResult.Merge(m, src)
}
func (m *RandomNumbersResult) XXX_Size() int {
	return m.Size()
}
func (m *RandomNumbersResult) XXX_DiscardUnknown() {
	xxx_messageInfo_RandomNumbersResult.DiscardUnknown(m)
}

var xxx_messageInfo_RandomNumbersResult proto.InternalMessageInfo

func (m *RandomNumbersResult) GetNumbers() []int64 {
	if m != nil {
		return m.Numbers
	}
	return nil
}

func init() {
	proto.RegisterType((*RandomNumbersCallData)(nil), "slandymani.odinworkshop.oracle.RandomNumbersCallData")
	proto.RegisterType((*RandomNumbersResult)(nil), "slandymani.odinworkshop.oracle.RandomNumbersResult")
}

func init() { proto.RegisterFile("oracle/random_numbers.proto", fileDescriptor_72b70b108183ba8f) }

var fileDescriptor_72b70b108183ba8f = []byte{
	// 210 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xce, 0x2f, 0x4a, 0x4c,
	0xce, 0x49, 0xd5, 0x2f, 0x4a, 0xcc, 0x4b, 0xc9, 0xcf, 0x8d, 0xcf, 0x2b, 0xcd, 0x4d, 0x4a, 0x2d,
	0x2a, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x92, 0x2b, 0xce, 0x49, 0xcc, 0x4b, 0xa9, 0xcc,
	0x4d, 0xcc, 0xcb, 0xd4, 0xcb, 0x4f, 0xc9, 0xcc, 0x2b, 0xcf, 0x2f, 0xca, 0x2e, 0xce, 0xc8, 0x2f,
	0xd0, 0x83, 0x68, 0x52, 0xd2, 0xe7, 0x12, 0x0d, 0x02, 0xeb, 0xf3, 0x83, 0x68, 0x73, 0x4e, 0xcc,
	0xc9, 0x71, 0x49, 0x2c, 0x49, 0x14, 0x12, 0xe3, 0x62, 0xcb, 0x49, 0xcd, 0x4b, 0x2f, 0xc9, 0x90,
	0x60, 0x54, 0x60, 0xd4, 0x60, 0x0e, 0x82, 0xf2, 0x94, 0xf4, 0xb9, 0x84, 0x51, 0x34, 0x04, 0xa5,
	0x16, 0x97, 0xe6, 0x94, 0x08, 0x49, 0x70, 0xb1, 0x43, 0x2d, 0x96, 0x60, 0x54, 0x60, 0xd6, 0x60,
	0x0e, 0x82, 0x71, 0x9d, 0x7c, 0x4e, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23,
	0x39, 0xc6, 0x09, 0x8f, 0xe5, 0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0xca,
	0x28, 0x3d, 0xb3, 0x24, 0xa3, 0x34, 0x49, 0x2f, 0x39, 0x3f, 0x57, 0x1f, 0xe1, 0x4c, 0x7d, 0x90,
	0x33, 0x75, 0x61, 0xee, 0xd4, 0xaf, 0xd0, 0x87, 0x7a, 0xaf, 0xa4, 0xb2, 0x20, 0xb5, 0x38, 0x89,
	0x0d, 0xec, 0x2d, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0x70, 0x54, 0x4e, 0x64, 0xf5, 0x00,
	0x00, 0x00,
}

func (m *RandomNumbersCallData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RandomNumbersCallData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RandomNumbersCallData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Length != 0 {
		i = encodeVarintRandomNumbers(dAtA, i, uint64(m.Length))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *RandomNumbersResult) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RandomNumbersResult) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RandomNumbersResult) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Numbers) > 0 {
		dAtA2 := make([]byte, len(m.Numbers)*10)
		var j1 int
		for _, num1 := range m.Numbers {
			num := uint64(num1)
			for num >= 1<<7 {
				dAtA2[j1] = uint8(uint64(num)&0x7f | 0x80)
				num >>= 7
				j1++
			}
			dAtA2[j1] = uint8(num)
			j1++
		}
		i -= j1
		copy(dAtA[i:], dAtA2[:j1])
		i = encodeVarintRandomNumbers(dAtA, i, uint64(j1))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintRandomNumbers(dAtA []byte, offset int, v uint64) int {
	offset -= sovRandomNumbers(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *RandomNumbersCallData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Length != 0 {
		n += 1 + sovRandomNumbers(uint64(m.Length))
	}
	return n
}

func (m *RandomNumbersResult) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Numbers) > 0 {
		l = 0
		for _, e := range m.Numbers {
			l += sovRandomNumbers(uint64(e))
		}
		n += 1 + sovRandomNumbers(uint64(l)) + l
	}
	return n
}

func sovRandomNumbers(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozRandomNumbers(x uint64) (n int) {
	return sovRandomNumbers(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *RandomNumbersCallData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowRandomNumbers
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: RandomNumbersCallData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RandomNumbersCallData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Length", wireType)
			}
			m.Length = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRandomNumbers
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Length |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipRandomNumbers(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthRandomNumbers
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *RandomNumbersResult) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowRandomNumbers
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: RandomNumbersResult: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RandomNumbersResult: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType == 0 {
				var v int64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowRandomNumbers
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					v |= int64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				m.Numbers = append(m.Numbers, v)
			} else if wireType == 2 {
				var packedLen int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowRandomNumbers
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					packedLen |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				if packedLen < 0 {
					return ErrInvalidLengthRandomNumbers
				}
				postIndex := iNdEx + packedLen
				if postIndex < 0 {
					return ErrInvalidLengthRandomNumbers
				}
				if postIndex > l {
					return io.ErrUnexpectedEOF
				}
				var elementCount int
				var count int
				for _, integer := range dAtA[iNdEx:postIndex] {
					if integer < 128 {
						count++
					}
				}
				elementCount = count
				if elementCount != 0 && len(m.Numbers) == 0 {
					m.Numbers = make([]int64, 0, elementCount)
				}
				for iNdEx < postIndex {
					var v int64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowRandomNumbers
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						v |= int64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					m.Numbers = append(m.Numbers, v)
				}
			} else {
				return fmt.Errorf("proto: wrong wireType = %d for field Numbers", wireType)
			}
		default:
			iNdEx = preIndex
			skippy, err := skipRandomNumbers(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthRandomNumbers
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipRandomNumbers(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowRandomNumbers
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowRandomNumbers
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowRandomNumbers
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthRandomNumbers
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupRandomNumbers
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthRandomNumbers
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthRandomNumbers        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowRandomNumbers          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupRandomNumbers = fmt.Errorf("proto: unexpected end of group")
)
